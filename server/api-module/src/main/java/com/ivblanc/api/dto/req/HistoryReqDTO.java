package com.ivblanc.api.dto.req;

import java.math.BigDecimal;
import java.util.List;

import javax.validation.constraints.Pattern;

import org.springframework.web.multipart.MultipartFile;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HistoryReqDTO {

	@ApiModelProperty(value = "위치", example = "000.0000000")
	private BigDecimal location;

	@ApiModelProperty(value = "경도", example = "0000.0000000")
	private BigDecimal field;

	@ApiModelProperty(value = "날짜", example = "yyyy-MM-dd")
	private String date;

	@Pattern(regexp = "^(맑음|흐림|비|눈)$")
	@ApiModelProperty(value = "날씨", example = "맑음")
	private String weather;

	@ApiModelProperty(value = "최저기온", example = "-5")
	private int temperature_low;

	@ApiModelProperty(value = "최고기온", example = "5")
	private int temperature_high;

	@ApiModelProperty(value = "내용", example = "")
	private String text;

	@ApiModelProperty(value = "제목", example = "")
	private String subject;

	@ApiModelProperty(value = "해당 히스토리에서 실착한 스타일의 아이디", example = "1")
	private int styleId;

	@ApiModelProperty(value = "해당 히스토리에 넣을 사진 리스트", example = "")
	private List<MultipartFile> photoList;

}
