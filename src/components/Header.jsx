import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TheatersIcon from '@mui/icons-material/Theaters';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import "./header.css"

function Header() {
  return (
    <div> <div>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" style={{ display: "flex", marginLeft: 5, fontSize: 30 }}>
                <div><CloudDownloadIcon style={{ color: "#ff0088", height: 50, width: 50, fontSize: 50 }} /></div><div style={{ marginLeft: 5 }}> Y2 Mate</div>

            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item active " >
                        <a className="nav-link   active  " href="#" style={{ display: "flex" }}>
                            <div ><HomeIcon style={{ height: 25, width: 25, fontSize: 25 }} /></div>   <div style={{ marginLeft: 5, fontSize: 18 }}>Home</div>  <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link " href="#" style={{ display: "flex" }}>
                            <div><MusicNoteIcon style={{ height: 25, width: 25, fontSize: 25 }} /></div>   <div style={{ marginLeft: 5, fontSize: 18 }}>Youtube to mp3</div>  <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link " href="#" style={{ display: "flex" }}>
                            <div><TheatersIcon style={{ height: 25, width: 25, fontSize: 25 }} /></div>   <div style={{ marginLeft: 5, fontSize: 18 }}>Youtube to mp4</div>  <span className="sr-only">(current)</span>
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle "
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            English
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">
                                Hindi
                            </a>
                            <a className="dropdown-item" href="#">
                                Punjabi
                            </a>
                            <a className="dropdown-item" href="#">
                                Tamil
                            </a>

                        </div>
                    </li>

                </ul>

            </div>
        </nav>

    </div>
</div></div>
  )
}

export default Header