import Error400 from  '../assets/Error400.svg';

const ContentError = () => {
    return (
        <div className='max-w-[600px] mx-auto py-5 px-5'>
            <p className='text-2xl font-semibold max-w-[480px] text-center mb-3'>Кажется что-то пошло не&nbsp;так! Попробуйте повторить попытку позже.</p>
            <img className='w-full' src={Error400} alt="Error 400"/>
        </div>
    )
}

export default ContentError;