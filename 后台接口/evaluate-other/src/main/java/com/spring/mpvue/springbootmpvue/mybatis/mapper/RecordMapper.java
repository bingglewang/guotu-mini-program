package com.spring.mpvue.springbootmpvue.mybatis.mapper;

import com.spring.mpvue.springbootmpvue.mybatis.po.Record;
import com.spring.mpvue.springbootmpvue.mybatis.po.RecordExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface RecordMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table record
     *
     * @mbggenerated Mon Mar 11 20:57:07 CST 2019
     */
    int countByExample(RecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table record
     *
     * @mbggenerated Mon Mar 11 20:57:07 CST 2019
     */
    int deleteByExample(RecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table record
     *
     * @mbggenerated Mon Mar 11 20:57:07 CST 2019
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table record
     *
     * @mbggenerated Mon Mar 11 20:57:07 CST 2019
     */
    int insert(Record record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table record
     *
     * @mbggenerated Mon Mar 11 20:57:07 CST 2019
     */
    int insertSelective(Record record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table record
     *
     * @mbggenerated Mon Mar 11 20:57:07 CST 2019
     */
    List<Record> selectByExample(RecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table record
     *
     * @mbggenerated Mon Mar 11 20:57:07 CST 2019
     */
    Record selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table record
     *
     * @mbggenerated Mon Mar 11 20:57:07 CST 2019
     */
    int updateByExampleSelective(@Param("record") Record record, @Param("example") RecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table record
     *
     * @mbggenerated Mon Mar 11 20:57:07 CST 2019
     */
    int updateByExample(@Param("record") Record record, @Param("example") RecordExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table record
     *
     * @mbggenerated Mon Mar 11 20:57:07 CST 2019
     */
    int updateByPrimaryKeySelective(Record record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table record
     *
     * @mbggenerated Mon Mar 11 20:57:07 CST 2019
     */
    int updateByPrimaryKey(Record record);
}