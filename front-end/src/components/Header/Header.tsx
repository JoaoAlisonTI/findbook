import backgroundImage from '../../assets/images/background-header.png';
import { HeaderTitle } from '../HeaderTitle/HeaderTitle'

export function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className=" w-auto bg-cover bg-center bg-no-repeat"
    >
      <HeaderTitle />
      <div className="mt-28">
        <p className="md:text-7xl text-3xl font-bold text-evergreen">
            Encontre livros <br /> que seja a sua cara!
        </p>
        <p className="text-gray-500 my-5 text-xl">Lorem ipsum</p>
      </div>
    </header>
  )
}