<template>

     <b-form-group 
        id="exampleInputGroup1"
        label="Email address:"
        label-for="exampleInput1"
        description="We'll never share your email with anyone else.">
    <b-form-input 
        id="exampleInput1"
        type="email"
        v-model="form.email"
        required
        placeholder="Enter email">
    </b-form-input>
    </b-form-group>

</template>
        
<script>
export default {
    props: {
        id: "",
        label: "",
        labelfor: "",
        description: "",
        placeholder: ""

    }
}
</script>
