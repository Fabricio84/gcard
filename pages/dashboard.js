import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Button, Text, TextField } from '@skynexui/components'
import { useRouter } from 'next/router';

export default function Dashboard() {
  const roteamento = useRouter();
  return (
    <div>Dashboard</div>
  )
}
