import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import DoctorCard from './DoctorCard'
const DoctorSection = () => {
    return (
        <Cont>
            <Left>
                <h3 className='
                text-blue-900 font-semibold  ml-3
                '>Available Doctors</h3>
                <CardCont>
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                </CardCont>
            </Left>
            <Left>
                <h3 className='
                text-blue-900 font-semibold  ml-3
                '>User Requests</h3>
                <CardCont>
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                    <DoctorCard />
                </CardCont>
            </Left>
        </Cont>
    )
}
const CardCont = styled.div`
${tw`
space-y-2 h-full w-full overflow-y-scroll
 drop-shadow-2xl
`} 
::-webkit-scrollbar{
    width: 7px;
}
::-webkit-scrollbar-track{
    border-radius: 10px;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.25);
}
::-webkit-scrollbar-thumb{
border-radius: 5px;
background-color: #1e3a8a;
cursor: pointer;
}
`
const Left = styled.div`
${tw`height[300px] w-full space-y-7
`}`
const Cont = styled.div`
${tw`grid grid-cols-1 md:grid-cols-1 mt-12 gap-5 gap-y-24 mb-20 xl:grid-cols-2`}
`
export default DoctorSection
