import React from 'react'

export default function Footer(props) {
  return (
    <div>
        <div className="card text-center my-2">
            <div className="card-header bg-primary text-dark">
                Featured
            </div>
            <div className="card-body"  style={{backgroundColor: props.mode === 'dark' ? '#04334a' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h5 className="card-title">Text Analyzer & Case Changer</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="https://javascript.info/" className="btn btn-primary">Join us</a>
            </div>
            <div className="card-footer bg-primary text-dark">
                2 days ago
            </div>
        </div>
    </div>
  )
}
