import React from 'react';
import Particles from 'react-particles-js';

import styled from 'styled-components'


const Div = styled.div`
    position: absolute;
    top: 0;
    left:0;
    width:${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100vh'};
    z-index:-1; 
`;



function Particle(props) {
    return (
        <Div width={props.width} height={props.height}>
            <Particles width={props.width ? props.width : "100%"} height={props.height ? props.height : "100%"}
                params={{
                    particles: {
                        number: {
                            value: 60,
                            density: {
                                enable: true,
                                value_area: 1000,
                            }
                        },
                        color: {
                            value: "#000000"
                        },
                        size: {
                            value: 2
                        },
                        line_linked: {
                            color: '#000000',
                            opacity: 0.2
                        }

                    },
                }}
            />
        </Div>
    )
}

export default Particle;
