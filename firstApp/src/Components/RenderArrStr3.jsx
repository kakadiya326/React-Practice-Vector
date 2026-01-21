import '../css/card.css'
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
            {
                arr.map(
                    (ele) => <li>{ ele }</li>
                )
            }
        </ol>
    )
}
