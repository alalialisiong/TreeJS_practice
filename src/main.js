var scene, camera, renderer, controls, axis;
const width = window.innerWidth;
const height = window.innerHeight;
const ratio = width / height;

const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, ratio, 1, 1000);
    camera.position.z = 10;

    // camera Orbit
    controls = new THREE.OrbitControls(camera);
    // axis helper
    axis = new THREE.AxesHelper(300);
    scene.add(axis);

    renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setClearColor('#e5e5e5');
    renderer.setSize(width, height);

    document.getElementById('webgl').append(renderer.domElement);

    // const sphere = getSphere(50, 32, 16, 0xffcc00);
    // scene.add(sphere);
    const customGeometry = getCustomGeometry();
    scene.add(customGeometry);
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const animate = () => {
        customGeometry.position.x = Math.abs(Math.sin(Date.now() * 0.001)) * 10;
        customGeometry.position.y = Math.abs(Math.cos(Date.now() * 0.001)) * 10;
    };

    const render = () => {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
        controls.update();
        animate();
    };
    render();
};

const getSphere = (radius, width, height, color) => {
    let geometry = new THREE.SphereGeometry(radius, width, height);
    let material = new THREE.MeshLambertMaterial({ color });
    return new THREE.Mesh(geometry, material);
};

const getPointLight = (color, intensity, distance) => {
    let light = new THREE.PointLight(color, intensity, distance);
    return light;
};

const getCustomGeometry = () => {
    const vertices = [
        { pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 0], }, // 0
        { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0], }, // 1
        { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1], }, // 2
        { pos: [1, 1, 1], norm: [0, 0, 1], uv: [1, 1], }, // 3
        // 오른쪽
        { pos: [1, -1, 1], norm: [1, 0, 0], uv: [0, 0], }, // 4
        { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0], }, // 5
        { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1], }, // 6
        { pos: [1, 1, -1], norm: [1, 0, 0], uv: [1, 1], }, // 7
        // 뒤쪽
        { pos: [1, -1, -1], norm: [0, 0, -1], uv: [0, 0], }, // 8
        { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0], }, // 9
        { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1], }, // 10
        { pos: [-1, 1, -1], norm: [0, 0, -1], uv: [1, 1], }, // 11
        // 왼쪽
        { pos: [-1, -1, -1], norm: [-1, 0, 0], uv: [0, 0], }, // 12
        { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0], }, // 13
        { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1], }, // 14
        { pos: [-1, 1, 1], norm: [-1, 0, 0], uv: [1, 1], }, // 15
        // 상단
        { pos: [1, 1, -1], norm: [0, 1, 0], uv: [0, 0], }, // 16
        { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0], }, // 17
        { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1], }, // 18
        { pos: [-1, 1, 1], norm: [0, 1, 0], uv: [1, 1], }, // 19
        // 하단
        { pos: [1, -1, 1], norm: [0, -1, 0], uv: [0, 0], }, // 20
        { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0], }, // 21
        { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1], }, // 22
        { pos: [-1, -1, -1], norm: [0, -1, 0], uv: [1, 1], }, // 23
    ];
    const positions = [];
    const normals = [];
    const uvs = [];
    for (const vertex of vertices) {
        positions.push(...vertex.pos);
        normals.push(...vertex.norm);
        uvs.push(...vertex.uv);
    }
    const geometry = new THREE.BufferGeometry();
    const positionNumComponents = 3;
    const normalNumComponents = 3;
    const uvNumComponents = 2;
    geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
    geometry.setAttribute(
        'normal',
        new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
    geometry.setAttribute(
        'uv',
        new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
    geometry.setIndex([
        0, 1, 2, 2, 1, 3,  // 앞쪽
        4, 5, 6, 6, 5, 7,  // 오른쪽
        8, 9, 10, 10, 9, 11,  // 뒤쪽
        12, 13, 14, 14, 13, 15,  // 왼쪽
        16, 17, 18, 18, 17, 19,  // 상단
        20, 21, 22, 22, 21, 23,  // 하단
    ]);
    const loader = new THREE.TextureLoader();
    const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/star.png');
    const material = new THREE.MeshPhongMaterial({ color:0x88FF88, map: texture });

    return new THREE.Mesh(geometry, material);;
}

init();
