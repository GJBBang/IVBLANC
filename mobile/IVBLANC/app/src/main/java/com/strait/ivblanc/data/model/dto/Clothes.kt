package com.strait.ivblanc.data.model.dto

data class Clothes(
    var category: Int,
    val clothesId: Int,
    var color: String,
    var count: Int,
    val createDate: String,
    val dislikePoint: Int,
    var favorite: Int,
    val likePoint: Int,
    var material: String,
    var season: Int,
    var size: Int,
    val updateDate: String,
    val url: String,
    val userId: Int
)