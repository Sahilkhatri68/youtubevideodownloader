import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./body.css"
import EastIcon from '@mui/icons-material/East';
import DownloadIcon from '@mui/icons-material/Download';
import MicOffIcon from '@mui/icons-material/MicOff';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import LinearProgress from '@mui/material/LinearProgress';
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
            alert("Please Enter a valid Link")

        })
    }
    useEffect(() => {
        getvideo()
    }, [])
    return (
        <>
            <div className='maincont'>
                <div className='insidemain'>
                    <div className='headdiv'>
                        {/* <h2 style={{ color: "rgb(116 116 116)" }}>Youtube Video downloader</h2> */}
                    </div>
                    <div className="bottombox">
                        <div className="inputbtn">
                            <div className="inputdiv">
                                <input className='leftip' placeholder='Paste your link here...' name={url}
                                    onChange={(e) => setUrl(e.target.value)}></input>
                            </div>
                            <div className="btndivip">
                                <button className='btnip' onClick={() => getvideo()}>Start <EastIcon style={{ marginLeft: 5 }} /> </button>
                            </div>
                        </div>
                    </div>
                    <div className='terms'>
                        <p>By using our service you are accepting our terms of service.</p>
                    </div>

                    {data ? (<>
                        <div className='framediv'>
                            <div className="leftframe">
                                <img src={data.thumb.high.url} style={{ width: "100%" }}>
                                </img>
                            </div>

                            <div className="rightframe">
                                <table className='righttable'>
                                    <tr className='stickpostion'>
                                        <th> Resolution</th>
                                        <th> Type</th>
                                        <th> Sound</th>
                                        <th> Download</th>
                                    </tr>
                                    {data.info.map((value) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td> {value.qualityLabel !== null ? (`${value.qualityLabel}`) : ("Audio")}   </td>
                                                    <td>{value.container}</td>
                                                    <td>{value.hasAudio === false ? (<MicOffIcon />) : (<VolumeUpIcon />)} </td>
                                                    <td >
                                                        <a href={value.url}>  <button className='tabledata'>
                                                            <div style={{ marginTop: 3, fontWeight: 500 }}> </div>
                                                            Download
                                                            <div style={{ marginTop: 3, marginLeft: 3 }}><DownloadIcon /></div>
                                                        </button></a>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })}


                                </table>
                            </div>

                        </div>
                    </>) : ""}
                </div>

            </div>

        </>
    )
}

