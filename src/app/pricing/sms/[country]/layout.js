export async function generateMetadata({ params }) {
    let country = params.country.replace(/-/g, ' ').toLowerCase()
    return {
        title: `SMS pricing for ${country} | Authkey.io`,
        description: `View SMS pricing for ${country} to send text SMS. Pay Only for what You use. Start now with a free trial.`,
        openGraph: {
            title: `SMS pricing for ${country} | Authkey.io`,
            description: `View SMS pricing for ${country} to send text SMS. Pay Only for what You use. Start now with a free trial.`,
        },
        alternates: {
            canonical: `https://authkey.io/pricing/sms/${params.country}`
        },
    };
}

const FaqDetailsLayout = ({ children }) => {
    return <>{children}</>;
};

export default FaqDetailsLayout;
