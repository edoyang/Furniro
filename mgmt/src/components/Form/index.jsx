import FormGroup from '../FormGroup'

const Form = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
          name: document.getElementById('product-name').value,
          price: document.getElementById('product-price').value,
          description: document.getElementById('product-description').value
        };
      
        try {
          const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          if (!response.ok) throw new Error('Product creation failed');
          const result = await response.json();
          console.log(result);
          alert('Product created successfully');
        } catch (error) {
          console.error(error.message);
            alert('Product creation failed');
        }
      };
      

  return (
    <form>
        <FormGroup name='product-name' label='Product Name' type='text' />
        <FormGroup name='product-price' label='Price' type='number' />
        <FormGroup name='product-description' label='Description' type='text' />
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Form