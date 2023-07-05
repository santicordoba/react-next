import styles from './page.module.css'
import Section from '@/components/sections'
import Nav from '@/components/nav'

export default function Home() {

  const listItems = ["Inicio", "Historia", "Clientes", "Servicios", "Contacto"]

  return (
    <main className={styles.main}>
      <header>
        <h1>Mi Web Corporativa</h1>
      </header>
      
      <Nav listado={listItems}></Nav>

      <Section titulo={"Inicio"}></Section>

      <Section titulo={"Historia"}></Section>

      <Section titulo={"Clientes"}></Section>

      <Section titulo={"Servicios"}></Section>

      <Section titulo={"Contacto"}></Section>

      <footer>
        <p>Derechos reservados &copy; 2023 Mi Web Corporativa</p>
      </footer>
    </main>
  )
}
