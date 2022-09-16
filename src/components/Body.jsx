import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./body.css"
import EastIcon from '@mui/icons-material/East';

export default function Body() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const [url, setUrl] = useState("")

    async function getvideo() {
        setIsLoading(true)
        const res = await axios.get(`http://localhost:4000/download?url=${url}`).then((res) => {
            setData(res.data);
            console.log(res.data)
            setIsLoading(false)
        }).catch((error) => {
            console.log(error)
            setIsLoading(false)

        })
    }
    useEffect(() => {
        getvideo()
    }, [])
    return (
        <>

            {/* <div style={{

                textAlign: "center",
                justifyContent: "center"
            }}>
                <div>
                    <div  >
                        <h1>Youtube video downloader</h1>

                    </div>
                </div>
                <div>
                    <div>
                        <input placeholder='Paste your link here' style={{ padding: 10, fontSize: 18 }} name={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />

                        <select name="cars" id="cars" style={{ padding: 10, fontSize: 18 }} >


                            <option value="saab">1080p</option>
                            <option value="opel">720p</option>
                            <option value="audi">420p</option>
                            <option value="audi">360p</option>
                            <option value="audi">240p</option>
                            <option value="audi">144p</option>
                        </select>
                    </div>
                </div>
                <div style={{ marginTop: 20 }}>
                    <button onClick={() => getvideo()} > {isLoading == true ? "Get Video" : ("Video found....")}</button>
                </div>

                <div style={{ marginTop: 20 }}>
                    {data ? (
                        <iframe style={{ width: 300, height: 300 }} src={data.url}>

                        </iframe>
                    ) : (0)}
                </div>

                <div>Available Formats </div>
                <div>

                </div>
            </div> */}

            <div className='maincont'>
                <div className='insidemain'>
                    <div className='headdiv'>
                        <h2 style={{ color: "rgb(116 116 116)" }}>Youtube Video downloader</h2>
                    </div>
                    <div className="bottombox">
                        <div className="inputbtn">
                            <div className="inputdiv">
                                <input className='leftip' placeholder='Paste your link here...'></input>
                            </div>
                            <div className="btndivip">
                                <button className='btnip'>Start <EastIcon style={{ marginLeft: 5 }} /> </button>
                            </div>
                        </div>
                    </div>
                    <div className='terms'>
                        <p>By using our service you are accepting our terms of service.</p>
                    </div>
                </div>
          
            </div>

        </>
    )
}

