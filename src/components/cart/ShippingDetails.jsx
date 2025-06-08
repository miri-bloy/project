const ShippingDetails = ({shippingData,updateData}) => {
  return (
     <div>
      <div class="form">
        <div>
          <span for="firstName">שם פרטי</span>
          <input type="text" id="firstName" value={shippingData.firstName} onChange={e=>updateData("firstName", e.target.value)}/>
          <span for="lastName">שם משפחה</span>
          <input type="text" id="lastName"  value={shippingData.lastName} onChange={e=>updateData("lastName", e.target.value)}/>
        </div>
        <div>
          <span for="address">רחוב</span>
          <input type="text" id="address"  value={shippingData.address} onChange={e=>updateData("address", e.target.value)}/>
          <span for="building">מספר בניין</span>
          <input type="text" id="building"  value={shippingData.building} onChange={e=>updateData("building", e.target.value)}/>
          <span for="zipcode">מיקוד</span>
          <input type="text" id="zipCode"  value={shippingData.zipCode} onChange={e=>updateData("zipCode", e.target.value)}/>
        </div>
        <div>
          <span for="country">ארץ</span>
          <input type="text" id="country"  value={shippingData.country} onChange={e=>updateData("country", e.target.value)}/>
          <span for="city">עיר</span>
          <input type="text" id="city"  value={shippingData.city} onChange={e=>updateData("city", e.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails;