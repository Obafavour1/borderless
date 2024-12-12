import { Legal, Project, Resource } from '@/constant/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='sections bg-blues-500'>
        <div className='flex justify-between gap-10 text-white flex-wrap'>
            <div className='grid gap-4'>
                <h4 className='font-semibold'>LEGAL</h4>
                {
                    Legal.map(legal=>{
                        return(
                        <div key={legal.name}>
                            
                            <Link href={legal.href} className='p1 text-blues-200'>{legal.name}</Link>
                        </div>
                        )
                    })
                }
            </div>
            <div className='grid gap-4'>
                <h4 className='font-semibold'>PROJECT</h4>
                {
                    Project.map(project=>{
                        return(
                        <div key={project.name}>
                            
                            <Link href={project.href} className='p1 text-blues-200'>{project.name}</Link>
                        </div>
                        )
                    })
                }
            </div>
            <div className='grid gap-4'>
            <h4 className='font-semibold'>RESOURCES</h4>
                {
                    Resource.map(resource=>{
                        return(
                        <div key={resource.name}>
                            
                            <Link href={resource.href} className='p1 text-blues-200'>{resource.name}</Link>
                        </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='text-white border-t mt-5 border-blues-200'>
            <p className='flex gap-3 my-5'>
                <Image src='/sendinglogo.svg' alt='Sending Logo' width={30} height={30} />
                <p>borderless</p>
            </p>
            <p>&copy; 2024 Borderless. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer