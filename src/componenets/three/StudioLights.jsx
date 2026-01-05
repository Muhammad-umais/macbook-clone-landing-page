import { Environment, Lightformer } from '@react-three/drei'

export default function StudioLights() {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <Lightformer
                    form="rect"
                    intensity={10}
                    position={[-10, 5, -5]}
                    scale={10}
                    rotation={[0, Math.PI / 2, 0]}
                />
                <Lightformer
                    form="rect"
                    intensity={10}
                    position={[10, 0, 1]}
                    scale={10}
                    rotation={[0, Math.PI / 2, 0]}
                />
            </Environment>

            <spotLight
                position={[-2, 10, 5]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />

            <spotLight
                position={[0, -25, 10]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />

            <spotLight
                position={[0, 15, 5]}
                angle={0.15}
                decay={0.1}
                intensity={Math.PI}
            />
        </group>
    )
}
