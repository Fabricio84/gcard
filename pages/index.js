import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Button, Text, TextField } from '@skynexui/components'
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const roteamento = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>GCard</title>
        <meta name="description" content="Gestão do cartão de credito" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gestor de cartão de crédito
        </h1>

        <Box
          as="form"
          styleSheet={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            width: { xs: '100%', sm: '50%' }, textAlign: 'left', marginBottom: '32px',
          }}
        >

          <Text variant="body3" styleSheet={{ marginBottom: '32px' }}>

          </Text>

          <TextField
            fullWidth
            isValid={false}
            label="Email"
            onChange={({ target }) => setUsername(target.value)}
            placeholder="Digite o seu email..."
            styleSheet={{}}
            value=""
            variant="basicBordered"
          />

          <TextField
            fullWidth
            isValid={false}
            label="Senha"
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Digite o sua senha..."
            styleSheet={{}}
            value=""
            variant="basicBordered"
          />

          <Button
            fullWidth
            label="Entrar"
            size="md"
            styleSheet={{ marginTop: '32px' }}
            onClick={(event) => {
              event.preventDefault();
              roteamento.push('/dashboard');
            }}
          />
        </Box>
        {/* Formulário */}


      </main>
    </div>
  )
}
