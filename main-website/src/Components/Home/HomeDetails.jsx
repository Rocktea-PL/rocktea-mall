
function HomeDetails() {
    return (
        <section className='mt-10'>
            
         <article className='flex flex-col md:flex-row items-start justify-center gap-20 mb-20'>
            <figure>
             <img src='https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421653/rocktea-main-website/assets/home3_kb67np.png' alt='home3' width={450} height={400}/>
            </figure>
            <div className='md:max-w-[50%]'>
                <p className='text-[var(--yellow)] text-[15px]'>What you will do </p>
                <h3>You don’t need a physical 
store to sell for us.</h3>
<p className='mt-8'>Whether you’re looking to supplement your income or embark on a full-fledged business journey, seize the opportunity
to earn money doing what you love without leaving where you are.
Join us now and embark on your path to profitability!</p>
            </div>
            </article>   

            <article className='flex flex-col md:flex-row-reverse items-start justify-center gap-20 mb-20'>
            <figure>
             <img src='https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421653/rocktea-main-website/assets/home4_wxe3tf.png' alt='home3' width={450} height={400} />
            </figure>
            <div className='md:max-w-[50%] '>
                <p className='text-[var(--yellow)] text-[15px]'>Member motivation </p>
                <h3>Over ₦30M paid to members in 6 months.</h3>
<p className='mt-8'>Celebrate your success! Your hard-earned
commissions are at your fingertips. Withdraw
them effortlessly, whenever you want. Your
dedication, your rewards – on your terms.
Start enjoying the fruits of your labor today!</p>
            </div>
            </article>   

            <article className='flex flex-col md:flex-row items-start justify-center gap-20 mb-5'>
            <figure>
             <img src='https://res.cloudinary.com/dwvdgmuaq/image/upload/v1694421646/rocktea-main-website/assets/home5_layygi.png' alt='home3' width={450} height={400} />
            </figure>
            <div className='md:max-w-[50%]'>
                <p className='text-[var(--yellow)] text-[15px]'>Earn either ways </p>
                <h3>Don’t just earn, you can buy and sell.</h3>
<p className='mt-8'>More than earning, embrace a world of
possibilities. Buy and sell with confidence, transforming your earnings into tangible
rewards. Discover the joy of financial empowerment. Don’t settle for less –
explore the full spectrum of opportunities
awaiting you. Your journey to financial growth
starts now.</p>
            </div>
            </article>   
        </section>
    )
}

export default HomeDetails
