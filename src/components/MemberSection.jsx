import React from 'react';

const MemberSection = () => {
    return (
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto'>
            <div className='flex gap-5 justify-between py-12'>
            <div className='space-y-2'>
                <p className='font-semibold'>Accredited Member</p>
                <ul className='flex gap-2 items-center'>
                    <li>
                    <img src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/accredited-member/basis.svg" alt="" />
                    </li>
                    <li>
                    <img src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/accredited-member/e-cab.svg" alt="" />
                    </li>
                    <li>
                    <img src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/accredited-member/pata.svg" alt="" />
                    </li>
                </ul>
               
              
             
            </div>
            <div className='space-y-2'>
                <p  className='font-semibold'>Verified by</p>
                <img src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/verified-by/comodo.svg" alt="" />
            </div>
            <div className='space-y-2'>
                <p  className='font-semibold'>Our Partners</p>
                <img src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/our-partners/google.svg" alt="" />
            </div>
            <div className='space-y-2'>
                <p  className='font-semibold'>Authorised by</p>
                <img src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/authorised-by/iata.svg" alt="" />
            </div>
            <div className='space-y-2'>
                <p  className='font-semibold'>Registered at</p>
                <img src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/registered-at/dun.svg" alt="" />
            </div>
            <div className='space-y-2'>
                <p  className='font-semibold'>Certified By</p>
                <img src="https://cdn.sharetrip.net/sharetrip_net/production/public/images/sample-images/certified-by/iso-certification.svg" alt="" />
            </div>
            </div>
            <hr />
        </div>
    );
};

export default MemberSection;