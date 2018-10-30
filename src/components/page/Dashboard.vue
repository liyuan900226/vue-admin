<template>
    <div>
        <!---------------表格-------------------->
        <div style="margin-top: 30px">
            <el-table
                    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    border
                    style="width: 100%"
                    :default-sort="{prop: 'parent_name', order: 'descending'}">
                <el-table-column
                        prop="press_name"
                        label="出版社"
                        align="center"
                        sortable>
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="version_name"
                        label="版本"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="book_name"
                        label="名称"
                        align="center"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="grade"
                        label="年级"
                        align="center"
                        sortable>
                </el-table-column>
                <el-table-column
                        prop="volume"
                        label="阶段"
                        sortable
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态"
                        sortable
                        align="center">
                </el-table-column>
                <el-table-column
                        sortable
                        prop="add_date"
                        label="添加时间"
                        align="center">
                </el-table-column>
                <el-table-column label="操作" align="center" width="250" prop="status">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleStatus(scope.$index, scope.row)">{{scope.row.status==="启用"?"禁用":"启用"}}</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        <el-button
                                size="mini"
                                type="primary"
                                @click="handleStage(scope.$index, scope.row)">关卡管理</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="position: relative">
                <el-pagination
                        class="page_center"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[10, 20, 50, 100]"
                        :page-size="pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="tableData.length">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return{

            }
        },
        computed: {

        }
    }

</script>


<style scoped>


</style>
