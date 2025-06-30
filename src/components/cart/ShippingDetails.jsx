const ShippingDetails = ({shippingData,updateData}) => {
  return (
     <div id="shippingDetails">
      <h2>פרטי תשלום</h2> 
      <div class="form">
        <div className="inputs">
          <input placeholder="שם פרטי" type="text" id="firstName" value={shippingData.firstName} onChange={e=>updateData("firstName", e.target.value)}/><br />
          <input placeholder="שם משפחה" type="text" id="lastName"  value={shippingData.lastName} onChange={e=>updateData("lastName", e.target.value)}/><br />
        </div>
        <div className="inputs">
          <input placeholder="רחוב" type="text" id="address"  value={shippingData.address} onChange={e=>updateData("address", e.target.value)}/><br />
          <input placeholder="מספר בניין" type="text" id="building"  value={shippingData.building} onChange={e=>updateData("building", e.target.value)}/><br />
          <input placeholder="מיקוד" type="text" id="zipCode"  value={shippingData.zipCode} onChange={e=>updateData("zipCode", e.target.value)}/><br />
        </div>
        <div className="inputs">
          <input placeholder="ארץ" type="text" id="country"  value={shippingData.country} onChange={e=>updateData("country", e.target.value)}/><br />
          <input placeholder="עיר" type="text" id="city"  value={shippingData.city} onChange={e=>updateData("city", e.target.value)}/><br />
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails;