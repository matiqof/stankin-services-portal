import {Link} from "react-router-dom";
import NavButton from "./NavButton.tsx";
function NavMenu() {
    return (
        <>
            <header
                className="flex flex-wrap z-50 w-full shadow-lg text-sm pb-2">
                <nav
                    className="relative max-w-[85rem] w-full  mx-auto flex items-center justify-center px-6 gap-x-12 py-6"
                    aria-label="Global">
                    <div className="flex items-center justify-between">
                        <Link to='/'>
                            <img
                                className="mx-auto h-20 w-auto"
                                src="https://stankin.ru/uploads/files/file_63c65df88e865.svg"
                                alt="Stankin logo"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center hs-collapse overflow-hidden transition-all duration-300 w-fit gap-y-2">
                        <div
                            className="flex justify-start flex-row gap-y-4 gap-x-2 w-fit">
                            <NavButton
                                type="submit"
                                goTo="/schedule"
                                styleButton="grow rounded-xl bg-stankin-white text-stankin-black px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm transition-all hover:px-3.5 hover:bg-stankin-red hover:text-stankin-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
                            >
                                Просмотр расписания
                            </NavButton>
                            <NavButton
                                type="submit"
                                goTo="/service"
                                styleButton="grow-0 rounded-xl bg-stankin-white px-3 py-1.5 text-sm font-semibold leading-6 text-stankin-black shadow-sm transition-all hover:px-3.5 hover:bg-stankin-red hover:text-stankin-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
                            >
                                Заказать справку
                            </NavButton>
                            <NavButton
                                type="submit"
                                goTo="/practice"
                                styleButton="grow rounded-xl bg-stankin-white px-3 py-1.5 text-sm font-semibold leading-6 text-stankin-black shadow-sm transition-all hover:px-3.5 hover:bg-stankin-red hover:text-stankin-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
                            >
                                Летняя практика
                            </NavButton>
                        </div>
                        <div
                            className="flex justify-center flex-row gap-y-4 gap-x-2 w-auto">
                            <NavButton
                                type="submit"
                                goTo="/"
                                styleButton="grow rounded-xl bg-stankin-white px-3 py-1.5 text-sm font-semibold leading-6 text-stankin-black shadow-sm transition-all hover:px-3.5 hover:bg-stankin-red hover:text-stankin-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
                            >
                                О СТАНКИН
                            </NavButton>
                            <NavButton
                                type="submit"
                                goTo="/module"
                                styleButton="grow-0 rounded-xl bg-stankin-white px-3 py-1.5 text-sm font-semibold leading-6 text-stankin-black shadow-sm transition-all hover:px-3.5 hover:bg-stankin-red hover:text-stankin-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
                            >
                                Модульный журнал
                            </NavButton>
                            <NavButton
                                type="submit"
                                goTo="/auth"
                                styleButton="grow rounded-xl bg-stankin-white px-3 py-1.5 text-sm font-semibold leading-6 text-stankin-black shadow-sm transition-all hover:px-3.5 hover:bg-stankin-red hover:text-stankin-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stankin-white"
                            >
                                Авторизация
                            </NavButton>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default NavMenu;