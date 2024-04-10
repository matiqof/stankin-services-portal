import Certificate from "../components/Certificate.tsx";

const CertificatePage = () => {
    return (
        <div className='flex flex-col gap-7 justify-center items-center py-14'>
            <Certificate
                title='Справка об обучении'
                fullName='Кузнецов М.В.'
                group='ИДБ-22-06'
                imgSrc={'/certificate.jpg'}
            />
        </div>
    );
};

export default CertificatePage;

