<template>
    <b-row align-v="center" align-h="center">
  
        <b-col cols="5" class="pr-0">
            <slot name="image"></slot>
            
        </b-col>
        <b-col cols="5" class="pl-0">
            <slot name="text"></slot>
            
        </b-col>
    
    </b-row>
</template>

<script>
export default {
    
}
</script>
