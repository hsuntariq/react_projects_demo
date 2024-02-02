import React, { useEffect, useState } from 'react'
import { MdContentCopy } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";

const SingleColor = ({ rgb, color, type }) => {
    const [copied, setCopied] = useState(false)
    const copyColor = () => {
        navigator.clipboard.writeText(`#${color}`)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)

        }, 600)
    }



    return (
        <>
            <div className="col-lg-3">
                <div className="card border-0">

                    <div style={{
                        background: `rgb(${rgb})`
                    }} className="border p-5 my-1 rounded-0 d-flex justify-content-between">
                        <h6 className={`${type === 'tint' ? 'text-dark' : 'text-white'}`} >
                            {copied ? 'Copied to clipboard' : `#${color}`}
                        </h6>
                        <div className="icon">
                            {copied ? (<IoCheckmarkDone />) : (<MdContentCopy onClick={copyColor} cursor='pointer' />)}


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SingleColor