"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type ToothCanvasProps = {
  className?: string;
};

export function ToothCanvas({ className }: ToothCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const wrapper = canvas.parentElement;
    if (!wrapper) return;

    const width = wrapper.clientWidth || 460;
    const height = wrapper.clientHeight || 540;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 7);
    camera.lookAt(0, 0.2, 0);

    const crownMat = new THREE.MeshPhysicalMaterial({
      color: 0xeef4ff,
      roughness: 0.08,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
    });
    const rootMat = new THREE.MeshPhysicalMaterial({ color: 0xd4b896, roughness: 0.55 });
    const pulpMat = new THREE.MeshPhysicalMaterial({
      color: 0xd44040,
      roughness: 0.7,
      emissive: 0x660000,
      emissiveIntensity: 0.3,
    });
    const cementMat = new THREE.MeshPhysicalMaterial({ color: 0xc8a878, roughness: 0.6 });
    const gumMat = new THREE.MeshPhysicalMaterial({
      color: 0xf08080,
      roughness: 0.65,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
    });

    const lathe = (pts: THREE.Vector2[], segs = 48) => new THREE.LatheGeometry(pts, segs);

    const crownPts = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.55, 0.05),
      new THREE.Vector2(0.9, 0.25),
      new THREE.Vector2(1.05, 0.6),
      new THREE.Vector2(1.1, 1.0),
      new THREE.Vector2(1.05, 1.4),
      new THREE.Vector2(0.9, 1.7),
      new THREE.Vector2(0.65, 1.9),
      new THREE.Vector2(0.3, 2.0),
      new THREE.Vector2(0.0, 2.02),
    ];
    const crown = new THREE.Mesh(lathe(crownPts, 52), crownMat);
    crown.position.y = 1.0;
    scene.add(crown);

    const cuspPositions = [
      [0.42, 0, 0],
      [-0.42, 0, 0],
      [0, 0, 0.42],
      [0, 0, -0.42],
      [0.3, 0, 0.3],
      [-0.3, 0, -0.3],
    ] as const;
    cuspPositions.forEach(([x, y, z]) => {
      const cusp = new THREE.Mesh(new THREE.SphereGeometry(0.22, 20, 16), crownMat);
      cusp.position.set(x, 3.19 + y, z);
      cusp.scale.y = 0.55;
      scene.add(cusp);
    });

    const cejPts = [new THREE.Vector2(0.52, 0), new THREE.Vector2(0.56, 0.08), new THREE.Vector2(0.52, 0.16)];
    const cej = new THREE.Mesh(lathe(cejPts, 48), cementMat);
    cej.position.y = 0.88;
    scene.add(cej);

    const makeRoot = (rx: number, rz: number, rootHeight: number, tilt: number) => {
      const pts = [
        new THREE.Vector2(0.0, 0.0),
        new THREE.Vector2(0.14, 0.1),
        new THREE.Vector2(0.28, 0.4),
        new THREE.Vector2(0.38, 0.9),
        new THREE.Vector2(0.4, 1.4),
        new THREE.Vector2(0.36, 2.0),
        new THREE.Vector2(0.24, rootHeight * 0.75),
        new THREE.Vector2(0.1, rootHeight * 0.95),
        new THREE.Vector2(0.01, rootHeight),
      ];
      const mesh = new THREE.Mesh(lathe(pts, 32), rootMat);
      mesh.position.set(rx, 0, rz);
      mesh.rotation.z = tilt;
      scene.add(mesh);
    };

    makeRoot(-0.45, 0.0, 3.0, 0.18);
    makeRoot(0.45, 0.0, 3.0, -0.18);
    makeRoot(0.0, -0.3, 2.7, 0.0);

    const pulpPts = [
      new THREE.Vector2(0.0, 0.0),
      new THREE.Vector2(0.1, 0.2),
      new THREE.Vector2(0.18, 0.7),
      new THREE.Vector2(0.2, 1.2),
      new THREE.Vector2(0.22, 1.7),
      new THREE.Vector2(0.18, 2.1),
      new THREE.Vector2(0.1, 2.3),
      new THREE.Vector2(0.0, 2.35),
    ];
    const pulp = new THREE.Mesh(lathe(pulpPts, 32), pulpMat);
    pulp.position.y = 0.4;
    pulp.scale.set(0.78, 0.78, 0.78);
    scene.add(pulp);

    [-0.28, 0.0, 0.28].forEach((ox, i) => {
      const pts = [
        new THREE.Vector2(0.0, 0.0),
        new THREE.Vector2(0.06, 0.5),
        new THREE.Vector2(0.07, 1.2),
        new THREE.Vector2(0.05, 2.0),
        new THREE.Vector2(0.01, 2.5),
      ];
      const canal = new THREE.Mesh(lathe(pts, 20), pulpMat);
      canal.position.set(ox * 0.6, -0.05, i === 1 ? -0.18 : 0);
      canal.scale.set(0.5, 0.5, 0.5);
      scene.add(canal);
    });

    const gum = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.12, 52, 1, false), gumMat);
    gum.position.y = 0.94;
    scene.add(gum);

    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const theta = Math.random() * Math.PI * 2;
      const r = 1.4 + Math.random() * 1.0;
      positions[i * 3] = Math.cos(theta) * r;
      positions[i * 3 + 1] = Math.random() * 5 - 2;
      positions[i * 3 + 2] = Math.sin(theta) * r;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0x00e5c9, size: 0.045, transparent: true, opacity: 0.65 })
    );
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0x8ab4c8, 0.65));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(4, 8, 5);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x00e5c9, 1.0);
    fill.position.set(-5, 3, -3);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0x4488ff, 0.6);
    rim.position.set(0, -4, 4);
    scene.add(rim);

    const glow = new THREE.PointLight(0x00bfa5, 1.4, 8);
    glow.position.set(0, -3.5, 1);
    scene.add(glow);

    const toothGroup = new THREE.Group();
    const toMove = scene.children.filter((child) => !(child instanceof THREE.Light) && child !== particles);
    toMove.forEach((child) => {
      scene.remove(child);
      toothGroup.add(child);
    });
    toothGroup.position.y = -1.2;
    scene.add(toothGroup);

    let isDragging = false;
    let previousX = 0;
    let rotationY = 0;

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousX = event.clientX;
    };
    const handleMouseUp = () => {
      isDragging = false;
    };
    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;
      rotationY += (event.clientX - previousX) * 0.012;
      previousX = event.clientX;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    let frameId = 0;
    let time = 0;
    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      time += 0.008;
      if (!isDragging) {
        toothGroup.rotation.y += 0.006;
      } else {
        toothGroup.rotation.y = rotationY;
      }
      toothGroup.position.y = -1.2 + Math.sin(time) * 0.06;
      glow.intensity = 1.2 + Math.sin(time * 1.5) * 0.4;
      particles.rotation.y -= 0.003;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nextWidth = wrapper.clientWidth || 460;
      const nextHeight = wrapper.clientHeight || 540;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      particleGeometry.dispose();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}

