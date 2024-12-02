import './BoxColor.css';

function BoxColor(props) {

    const { r, g, b } = props;

    function rgbToHex(r, g, b) {
        return "#" +
            r.toString(16).padStart(2, '0') +
            g.toString(16).padStart(2, '0') +
            b.toString(16).padStart(2, '0');
    }

    const hexCode = rgbToHex(r, g, b);

    let letteringColor;

    if (g > 190) {
        letteringColor = 'black';
    } else {
        letteringColor = 'white';
    }

    return (
        <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, color: letteringColor }} className='box-color' >
            {`rgb(${r}, ${g}, ${b})`}
            <br />
            {hexCode}
        </div>
    )
}

export default BoxColor;