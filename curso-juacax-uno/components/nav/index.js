export default function Nav({listado}){
    
    let menu;

    menu = listado.map(el => 
        <a href="#inicio">{el}</a>
    )

    return(
        <nav>
            {menu}
        </nav>
    )
}