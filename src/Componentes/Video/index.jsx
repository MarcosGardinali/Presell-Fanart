import React from 'react'
import style from './video.module.css'

export default function Video() {
    return (
        <section>
            <iframe title='Video' className={style.video} src="https://player.vimeo.com/video/862746752?h=0a8a0b465c"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </section>
    )
}
