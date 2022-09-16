import React from 'react'
import "./footer.css"
import CachedIcon from '@mui/icons-material/Cached';
import DownloadIcon from '@mui/icons-material/Download';
import PersonIcon from '@mui/icons-material/Person';
import BoltIcon from '@mui/icons-material/Bolt';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
function Footer() {
    return (
        <div className='mainfooter'>
            <div className='contfooter'>
                <div className="tophead">
                    <h2>Best Youtube Video Downloader</h2>
                </div>
                <div className="para">Y2Mate is the fastest Youtube Downloader tool that allows you to easily convert and download videos and audios from youtube for free and in the best available quality. Y2Mate is the ultimate tool to download unlimited youtube videos without any need for registration. You can quickly convert and download hundreds of videos and music files directly from youtube and other social media websites. We support all audio and video formats like MP3, MP4, M4V, FLV, WEBM, 3GP, WMV, AVI, etc., and the most amazing thing, it's completely free.</div>
            </div>
            <hr className='hrr' />
            <div className='lowerpart'>
                <div className="leftfootcont">
                    <h4>How to Download Youtube videos with Y2Mate?</h4>
                    <div>
                        <b> 1.</b> Open Youtube and copy the video URL you want to download. <br />
                        <b> 2.</b> Paste the video URL in the Search box, Tool will fetch video info. <br />
                        <b> 3.</b> Select the Video or Audio quality you need and click the "Convert" button. <br />
                        <b> 4.</b> After the conversion is successfully completed, hit the "Download" button. <br />
                        <b> 5.</b> Once the video is downloaded, you can play it whenever and wherever you want. <br />
                    </div>
                </div>
                <div className="rightfootcont">
                    <h4>Why use our Online Video Downloader?</h4>
                    <div>
                        <b> 1.</b> Unlimited Conversions, so you can convert all your videos. <br />
                        <b> 2.</b> High-Speed encoding to convert your videos fasterq <br />
                        <b> 3.</b> Unlimited Downloads, convert as much as you can. <br />
                        <b> 4.</b> No Signup required, our service is totally free. <br />
                        <b> 5.</b> Support Downloading multiple formats, e.g. MP4 and MP3. <br />
                    </div>
                </div>
            </div>
            <hr className='hrr' />

            <div className='newbottom'>
                <div className="botmdivup">
                    <div className="child1">
                        <div className="subchildtop">
                            <CachedIcon className='muiiconn' style={{ height: 60, width: 60, textAligm: "center", margin: "auto" }} />
                        </div>
                        <div className="subchildmid">
                            <h4>Unlimited Conversions</h4>
                        </div>
                        <div className="subchildbottom">
                            We offers unlimited conversions of youtube videos to mp3 and mp4.
                        </div>
                    </div>
                    <div className="child1">
                        <div className="subchildtop">
                            <DownloadIcon className='muiiconn' style={{ height: 60, width: 60, textAligm: "center", margin: "auto" }} />
                        </div>
                        <div className="subchildmid">
                            <h4>Auto Fetch from Youtube</h4>
                        </div>
                        <div className="subchildbottom">
                            We automatically fetch data from Youtube, you just have to copy and paste the youtube URL.


                        </div>
                    </div><div className="child1">
                        <div className="subchildtop">
                            <PersonIcon className='muiiconn' style={{ height: 60, width: 60, textAligm: "center", margin: "auto" }} />
                        </div>
                        <div className="subchildmid">
                            <h4>No Registration Required</h4>
                        </div>
                        <div className="subchildbottom">
                            You don't need to register to convert and download   videos to mp4 and mp3 format.
                        </div>
                    </div>
                </div>
                <div className="botmdivup">
                    <div className="child1">
                        <div className="subchildtop">
                            <BoltIcon className='muiiconn' style={{ height: 60, width: 60, textAligm: "center", margin: "auto" }} />
                        </div>
                        <div className="subchildmid">
                            <h4>Faster Video Conversion</h4>
                        </div>
                        <div className="subchildbottom">
                            We offers unlimited conversions of youtube videos to mp3 and mp4.
                        </div>
                    </div>
                    <div className="child1">
                        <div className="subchildtop">
                            <FileDownloadDoneIcon className='muiiconn' style={{ height: 60, width: 60, textAligm: "center", margin: "auto" }} />
                        </div>
                        <div className="subchildmid">
                            <h4>Browser Compatibility</h4>
                        </div>
                        <div className="subchildbottom">
                            We automatically fetch data from Youtube, you just have to copy and paste the youtube URL.


                        </div>
                    </div><div className="child1">
                        <div className="subchildtop">
                            <PhoneAndroidIcon className='muiiconn' style={{ height: 60, width: 60, textAligm: "center", margin: "auto" }} />
                        </div>
                        <div className="subchildmid">
                            <h4>Completely Mobile friendly</h4>
                        </div>
                        <div className="subchildbottom">
                            You don't need to register to convert and download   videos to mp4 and mp3 format.
                        </div>
                    </div>
                </div>

            </div>
            <hr className='hrr' />
            <div className='endfoot'>
                <div>
                    &copy;2022 Y2Mate.is - Your favorite video converter.
                </div>
                <div style={{marginTop:10}}>
                    <a href="#">F.A.Q </a>  &nbsp;&nbsp;&nbsp;
                    <a href="#">Terms of Service </a>&nbsp;&nbsp;&nbsp;
                    <a href="#">Privacy Policy  </a>&nbsp;&nbsp;&nbsp;
                    <a href="#">Contact us</a>&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </div>
    )
}

export default Footer