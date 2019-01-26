<template>
<div>

  
            <h1>
        The products go here
        
    </h1>
        <p>{{ JSON.stringify(product) }}</p>
       



    
        </div>
</template>

<script>
export default {
    props: {
        product: Object
    }
}
</script>
