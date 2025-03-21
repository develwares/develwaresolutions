interface FlagColombiaProps {
    width: number;
    height: number;
}

const FlagColombia = ({ width, height }: FlagColombiaProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 216.216 136.728"
    >
        <g
            fillRule="evenodd"
            clipRule="evenodd"
            stroke="#000"
            strokeWidth={0.216}
            strokeMiterlimit={2.613}
        >
            <path fill="#fff22d" d="M.108.108h215.928v136.511H.108V.108z" />
            <path fill="#cc2229" d="M.18 102.275h215.927v34.344H.18v-34.344z" />
            <path fill="#33348e" d="M.108 68.363h215.999v33.912H.108V68.363z" />
        </g>
    </svg>
)
export default FlagColombia