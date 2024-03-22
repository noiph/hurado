'use client'

import type { FunctionComponent } from 'react'

import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'

import styles from './page.module.css'

const Page: FunctionComponent = () => {
    const [ throttle, setThrottle ] = useState<boolean>(false)

    const submit = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        submit.current!.style.backgroundColor = throttle
            ? 'var(--purple-light)'
            : 'var(--purple)'
    }, [ throttle ])

    const router = useRouter()

    const [ email, setEmail ] = useState<string>('')
    const [ username, setUsername ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const [ confirmPassword, setConfirmPassword ] = useState<string>('')

    const register = async () => {
        try {
            const response = await fetch('api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    username,
                    password,
                    confirmPassword,
                })
            })

            if (!response.ok) {
                throw new Error('')
            }

            router.push('/login')
        } catch (error) {}

        setThrottle(false)
    }

    return (
        <form id={ styles.registerform }>
            <h1>Register</h1>
            <div className={ styles.row }>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className={ styles.row }>
                <label htmlFor='username'>Username:</label>
                <input
                    type='text'
                    id='username'
                    onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div className={ styles.row }>
                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    id='password'
                    onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className={ styles.row }>
                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input
                    type='password'
                    id='confirmPassword'
                    onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <button
                type='button'
                ref={ submit }
                onClick={() => {
                    if (throttle) {
                        return
                    }

                    register()
                    setThrottle(true)
            }}>Submit</button>
        </form>
    )
}

export default Page