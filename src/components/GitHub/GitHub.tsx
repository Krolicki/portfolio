import './GitHub.css'
import {ReactComponent as GitLogo} from './github-mark-white.svg'

export const GitHub = () => {
    return (
        <section className='github-wraper'>
            <div className='git-info'>
                <h3>Sprawdź wszystkie moje projekty i to nad czym aktualnie pracuję na</h3>
                <a href="https://github.com/Krolicki" target='_blank'><img src="/GitHub_Logo_White.png" /></a>
            </div>
            <div className='git-logo-wraper'>
                <GitLogo className='git-logo'/>
            </div>
        </section>
    )
}