<template>
    
</template>

<script>
export default {

    mounted() {
           var entity = new myModel({
                name: 'zhangsan',
                img: 'sadyfgasdhf',
                price: '515',
                num: 5,
                choose:'白色'
            });

            entity.save((err, doc)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(doc);
                }
            });


    },
}
</script>


<style>

</style>
