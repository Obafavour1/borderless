import Image from 'next/image'
import React from 'react'

const More = () => {
  return (
    <section>
        <div>
            <div>
                <p>Many more things</p>
                <h3>Just <span>enough</span> to get you going everyday</h3>
            </div>
            <div>
                <Image src='/' alt='Sending Logo' width={30} height={30} />
                <div>
                    <h4>Business Transfer</h4>
                    <p>Boss Moves? We've got your business transfers handled</p>
                </div>
                <Image src='/' alt='Sending Logo' width={30} height={30} />
                <div>
                    <h4>Personal Transfers</h4>
                    <p>Send Love, Send Support, Send Smiles!</p>
                </div>
                <Image src='/' alt='Sending Logo' width={30} height={30} />
                <div>
                    <h4>Currency exchange</h4>
                    <p>Unlock the best exchange rates, and say hello to savings.</p>
                </div>
            </div>
            <button type="button">Start sending</button>
        </div>
    </section>
  )
}

export default More