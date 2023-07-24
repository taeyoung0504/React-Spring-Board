package com.sboot.react_st.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity 
@Table(name = "board") 
@Getter @Setter 
@AllArgsConstructor
@NoArgsConstructor 
public class Board { 
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id; 

  @Column(name = "title") 
  private String title; 

  @Column(name = "content") 
  private String content; 

  @Column(name = "writer") 
  private String writer; 

  @Column(name = "view_cnt") 
  private Integer viewCnt=0; 
 


  public void incrementViewCnt() {
      this.viewCnt++;
  }
}


