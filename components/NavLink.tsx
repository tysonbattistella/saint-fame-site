import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

type NavLinkProps = {
    href: string
    children: JSX.Element
}

const NavLink = ({ href, children }: NavLinkProps) => {
    const router = useRouter()

    let className = children.props.className || ''
    if (router.pathname === href) {
        className = `${className} selected`
    }

    return (
        <Link href={href}>{React.cloneElement(children, { className })}</Link>
    )
}
export default NavLink
