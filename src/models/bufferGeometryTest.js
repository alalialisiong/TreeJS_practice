const vertices = [
    // 앞쪽
    { pos: [-1, -1, 1], norm: [0, 0, 1], uv: [0, 0], },
    { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0], },
    { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1], },

    { pos: [-1, 1, 1], norm: [0, 0, 1], uv: [0, 1], },
    { pos: [1, -1, 1], norm: [0, 0, 1], uv: [1, 0], },
    { pos: [1, 1, 1], norm: [0, 0, 1], uv: [1, 1], },
    // 오른쪽
    { pos: [1, -1, 1], norm: [1, 0, 0], uv: [0, 0], },
    { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0], },
    { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1], },

    { pos: [1, 1, 1], norm: [1, 0, 0], uv: [0, 1], },
    { pos: [1, -1, -1], norm: [1, 0, 0], uv: [1, 0], },
    { pos: [1, 1, -1], norm: [1, 0, 0], uv: [1, 1], },
    // 뒤쪽
    { pos: [1, -1, -1], norm: [0, 0, -1], uv: [0, 0], },
    { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0], },
    { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1], },

    { pos: [1, 1, -1], norm: [0, 0, -1], uv: [0, 1], },
    { pos: [-1, -1, -1], norm: [0, 0, -1], uv: [1, 0], },
    { pos: [-1, 1, -1], norm: [0, 0, -1], uv: [1, 1], },
    // 왼쪽
    { pos: [-1, -1, -1], norm: [-1, 0, 0], uv: [0, 0], },
    { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0], },
    { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1], },

    { pos: [-1, 1, -1], norm: [-1, 0, 0], uv: [0, 1], },
    { pos: [-1, -1, 1], norm: [-1, 0, 0], uv: [1, 0], },
    { pos: [-1, 1, 1], norm: [-1, 0, 0], uv: [1, 1], },
    // 상단
    { pos: [1, 1, -1], norm: [0, 1, 0], uv: [0, 0], },
    { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0], },
    { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1], },

    { pos: [1, 1, 1], norm: [0, 1, 0], uv: [0, 1], },
    { pos: [-1, 1, -1], norm: [0, 1, 0], uv: [1, 0], },
    { pos: [-1, 1, 1], norm: [0, 1, 0], uv: [1, 1], },
    // 하단
    { pos: [1, -1, 1], norm: [0, -1, 0], uv: [0, 0], },
    { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0], },
    { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1], },

    { pos: [1, -1, -1], norm: [0, -1, 0], uv: [0, 1], },
    { pos: [-1, -1, 1], norm: [0, -1, 0], uv: [1, 0], },
    { pos: [-1, -1, -1], norm: [0, -1, 0], uv: [1, 1], },
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
const thisModule = {
    geometry
}

module.exports = thisModule;