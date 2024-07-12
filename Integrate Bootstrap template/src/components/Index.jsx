import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Index = () => {
  return (
     <div className="section d-flex" style={{marginLeft:"13%"}}>
            <div className="container text-left">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1>Hi, Hi, I'm John Deo.</h1><br></br>
                        <p>
                            A freelance Web developer from London. I convert custom web designs to bootstrap templates. I make YouTube videos and write Blog.
                        </p><br></br>
                        <a href="" className="btn btn-primary">I'm Available</a>
                        <div className="mt-3">
                            <FaFacebookF />
                            <FaTwitter className='ms-3'/>
                            <RiInstagramFill className='ms-3'/>
                            <FaGithub className='ms-3'/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://img.freepik.com/free-photo/handsome-young-businessman-portrait_144627-21887.jpg?t=st=1720771179~exp=1720774779~hmac=82cdf9320b969f49e8f0f10f7451b67750586ac93da94daaff32f5a7576d0f48&w=360" alt="John Deo" height={500} />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Index
