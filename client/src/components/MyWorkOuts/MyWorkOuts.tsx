import React from 'react'
import { useAppSelector } from '../../redux/Hooks'

const MyWorkOuts = () => {

    const userState = useAppSelector(state => state.User)
    const userWorkOuts = userState.user?.myWorkouts

    return (
        <div>
            <div>
                MyWorkOuts
            </div>

            {userWorkOuts?.map(((workOut:any) => {return (
                workOut.workOutName
            )}))}



        </div>



    )
}

export default MyWorkOuts