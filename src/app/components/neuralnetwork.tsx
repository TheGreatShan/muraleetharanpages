"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function NeuralNetworkBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="neural-network"
            init={particlesInit}
            className="absolute inset-0 -z-10"
            options={{
                background: {
                    color: "#0a0a0f"
                },
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            area: 800
                        }
                    },
                    color: {
                        value: "#00ffff" 
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: 0.8
                    },
                    size: {
                        value: 3
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#00ffff",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "bounce"
                        }
                    }
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab"
                        },
                        onClick: {
                            enable: true,
                            mode: "push"
                        }
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            links: {
                                opacity: 0.8
                            }
                        },
                        push: {
                            quantity: 4
                        }
                    }
                }
            }}
        />
    );
}