import backgroundImage from '../../assets/images/background-header.png';
import { HeaderTitle } from '../HeaderTitle/HeaderTitle'
import { Container } from '../Container/Container'

export function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className=" w-auto bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <HeaderTitle />
        <div className="mt-28">
          <p className="md:text-7xl text-3xl font-bold text-evergreen">
              Encontre livros <br /> que seja a sua cara!
          </p>
          <p className="text-gray-500 my-5 text-xl">Lorem ipsum</p>
        </div>
      </Container>
    </header>
  )
}