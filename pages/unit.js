import Head from 'next/head'


let preElem = null;
let postElem = null;

let preUnit = null;
let postUnit = null;


if (typeof document !== "undefined") {
    preElem = document.querySelector("#pre-number");
    postElem = document.querySelector("#post-number");

    preUnit = document.querySelector("#pre-unit");
    postUnit = document.querySelector("#post-unit");
}
const unitToMeter = {
    "tubo": 3.3,
    "se": 99,
    "tan": 990,
    "cho": 9900,
}

const calcRatio = (pre, post) => {
    return unitToMeter[post] / unitToMeter [pre];
}

const changeHandler = () => {
    postElem.value = preElem.value * calcRatio(preUnit.value, postUnit.value);
}
 
export default function Home() {
    return (
        <>
            <Head>
                <title>Hacks Unit</title>
            </Head>
            <body>
                <div>
                    <p>All can handles all Units;</p>
                    <label>
                        <p>変換前</p>
                        <input type='number' id='pre-number' placeholder='変換前' />
                    </label>
                    <label>
                        <p>変換前の単位</p>
                        <select id="pre-unit">
                            <option selected value="tubo">坪</option>
                            <option value="se">畝</option>
                            <option value="tan">反</option>
                            <option value="cho">町</option>
                        </select>
                    </label>
                    <label>
                        <p>変換後の単位</p>
                        <select id="post-unit">
                            <option selected value="tubo">坪</option>
                            <option value="se">畝</option>
                            <option value="tan">反</option>
                            <option value="cho">町</option>
                        </select>
                    </label>
                    <p>変換比率 {calcRatio(preUnit.value, postUnit.value)}</p>
                    
                    <input onClick={changeHandler} type='button' value="変換" />
                    <label>
                        <p>変換後</p>
                        <input type='number' id='post-number' placeholder='変換後' />
                    </label>
                </div>
            </body>
        </>
      )
}
  