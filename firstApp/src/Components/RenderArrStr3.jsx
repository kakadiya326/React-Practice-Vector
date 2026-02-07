import '../css/card.css'
import BackButton from './BackButton'
export default function RenderArrStr3() {
    let arr = [
        'Python',
        'Pandas',
        'NumPy',
        'ML',
        'DL',
        'NLP',
        'Django',
    ]
    return (
        <ol>
            <BackButton/>
            {
                arr.map(
                    (ele) => <li>{ ele }</li>
                )
            }
        </ol>
    )
}
