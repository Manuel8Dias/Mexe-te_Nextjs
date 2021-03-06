import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"

import styles from "../styles/components/Profile.module.css"

export function Profile() {
    const { level } = useContext(ChallengesContext) 

    return(
        <div className= {styles.profileContainer}>
            <img src="https://github.com/Manuel8Dias.png" alt="Manuel Dias" />

            <div>
                <strong>Manuel Dias </strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level { level } 
                </p>
            </div>
        </div>
    )
}