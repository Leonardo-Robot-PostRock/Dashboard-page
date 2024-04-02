"use client"
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export const WidgetsGrid = () => {
    const isCart = useAppSelector(state => state.counter.count);

    return (
        <div className='flex flex-wrap p-2 item-center justify-center'>
            <SimpleWidget
                subTitle='Productos agregados'
                title={`${isCart}`}
                href='/dashboard/counter'
                label='Contador'
                icon={<IoCartOutline size={70} className='text-blu-600' />}
            />
        </div>
    )
}

