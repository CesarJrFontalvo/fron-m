import { FC } from 'react';

interface Icons {
    color_fill: string;
    on_click?: () => any;
    styles?: React.CSSProperties;
}
const ArrowRight: FC<Icons> = ({ color_fill }) => {
    return (
        <svg
            id="Componente_72_2"
            data-name="Componente 72 – 2"
            xmlns="http://www.w3.org/2000/svg"
            width="72.002"
            height="39"
            viewBox="0 0 72.002 39"
        >
            <g id="Grupo_20171" data-name="Grupo 20171" transform="translate(1374 666) rotate(180)">
                <path
                    id="Trazado_12929"
                    data-name="Trazado 12929"
                    d="M.33-5.3a1.116,1.116,0,0,1,.8-.328,1.12,1.12,0,0,1,.8.33L6.375-.839V-19.875A1.127,1.127,0,0,1,7.5-21a1.127,1.127,0,0,1,1.125,1.125V-.839L13.08-5.294a1.125,1.125,0,0,1,1.591,0,1.125,1.125,0,0,1,0,1.591L8.3,2.672a1.125,1.125,0,0,1-1.591,0L.33-3.7A1.129,1.129,0,0,1,.33-5.3Z"
                    transform="translate(1329 639) rotate(90)"
                    fill={color_fill}
                />
            </g>
        </svg>
    );
};

export default ArrowRight;
